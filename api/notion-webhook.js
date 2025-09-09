// api/notion-webhook.js
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Verify the request is from Notion (optional security)
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.WEBHOOK_SECRET}`) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Trigger GitHub Actions workflow
    const response = await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPO}/actions/workflows/notion-sync.yml/dispatches`, {
      method: 'POST',
      headers: {
        'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ref: 'main',
        inputs: {
          triggered_by: 'notion-webhook'
        }
      })
    });

    if (response.ok) {
      console.log('✅ GitHub Actions workflow triggered successfully');
      return res.status(200).json({ 
        message: 'Sync triggered successfully',
        timestamp: new Date().toISOString()
      });
    } else {
      console.error('❌ Failed to trigger workflow:', response.statusText);
      return res.status(500).json({ 
        message: 'Failed to trigger sync',
        error: response.statusText
      });
    }
  } catch (error) {
    console.error('❌ Webhook error:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error.message
    });
  }
}
