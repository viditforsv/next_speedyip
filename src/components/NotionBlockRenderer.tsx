'use client';

import React from 'react';
import Image from 'next/image';

// Types for Notion blocks
interface NotionBlock {
  id: string;
  type: string;
  [key: string]: any;
}

interface NotionRichText {
  type: string;
  text?: {
    content: string;
    link?: { url: string };
  };
  annotations?: {
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
    code?: boolean;
    color?: string;
  };
}

interface NotionBlockRendererProps {
  blocks: NotionBlock[];
}

// Helper function to render rich text
function renderRichText(richText: NotionRichText[]): React.ReactNode {
  if (!richText || richText.length === 0) return null;

  return richText.map((text, index) => {
    let content = text.text?.content || '';
    
    if (text.text?.link) {
      content = (
        <a 
          href={text.text.link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {content}
        </a>
      );
    }

    if (text.annotations?.bold) {
      content = <strong key={index}>{content}</strong>;
    }
    if (text.annotations?.italic) {
      content = <em key={index}>{content}</em>;
    }
    if (text.annotations?.code) {
      content = <code key={index} className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{content}</code>;
    }
    if (text.annotations?.strikethrough) {
      content = <del key={index}>{content}</del>;
    }

    return <span key={index}>{content}</span>;
  });
}

// Individual block renderers
function renderBlock(block: NotionBlock): React.ReactNode {
  const { type, id } = block;

  try {
    switch (type) {
    case 'paragraph':
      const paragraphText = block.paragraph?.rich_text || [];
      if (paragraphText.length === 0) return <p className="mb-4">&nbsp;</p>;
      return (
        <p className="mb-4 text-gray-700 leading-relaxed">
          {renderRichText(paragraphText)}
        </p>
      );

    case 'heading_1':
      return (
        <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8">
          {renderRichText(block.heading_1?.rich_text || [])}
        </h1>
      );

    case 'heading_2':
      return (
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
          {renderRichText(block.heading_2?.rich_text || [])}
        </h2>
      );

    case 'heading_3':
      return (
        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-5">
          {renderRichText(block.heading_3?.rich_text || [])}
        </h3>
      );

    case 'bulleted_list_item':
      return (
        <li className="mb-2 text-gray-700">
          {renderRichText(block.bulleted_list_item?.rich_text || [])}
        </li>
      );

    case 'numbered_list_item':
      return (
        <li className="mb-2 text-gray-700">
          {renderRichText(block.numbered_list_item?.rich_text || [])}
        </li>
      );

    case 'image':
      const imageUrl = block.image?.file?.url || block.image?.external?.url;
      const imageCaption = block.image?.caption || [];
      
      if (!imageUrl) return null;
      
      // Validate URL before using it
      try {
        new URL(imageUrl);
      } catch (error) {
        console.warn('Invalid image URL:', imageUrl);
        return (
          <div className="my-6">
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-600">Image could not be loaded</p>
              <p className="text-sm text-gray-500 mt-2">Invalid URL: {imageUrl}</p>
            </div>
          </div>
        );
      }
      
      return (
        <div className="my-6">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={imageCaption.length > 0 ? imageCaption[0].plain_text : 'Image'}
              fill
              className="object-cover"
            />
          </div>
          {imageCaption.length > 0 && (
            <p className="text-sm text-gray-600 mt-2 text-center italic">
              {renderRichText(imageCaption)}
            </p>
          )}
        </div>
      );

    case 'code':
      const codeText = block.code?.rich_text || [];
      const language = block.code?.language || 'text';
      
      return (
        <div className="my-6">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className={`language-${language}`}>
              {codeText.map(text => text.text?.content || '').join('')}
            </code>
          </pre>
        </div>
      );

    case 'quote':
      return (
        <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 text-gray-700 italic">
          {renderRichText(block.quote?.rich_text || [])}
        </blockquote>
      );

    case 'callout':
      const calloutIcon = block.callout?.icon?.emoji || '💡';
      return (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4 flex items-start">
          <span className="text-xl mr-3">{calloutIcon}</span>
          <div className="text-gray-700">
            {renderRichText(block.callout?.rich_text || [])}
          </div>
        </div>
      );

    case 'divider':
      return <hr className="my-8 border-gray-300" />;

    case 'toggle':
      return (
        <details className="my-4">
          <summary className="cursor-pointer font-semibold text-gray-900">
            {renderRichText(block.toggle?.rich_text || [])}
          </summary>
          <div className="mt-2 pl-4">
            {/* Note: Toggle children would need to be fetched separately */}
            <p className="text-gray-600">Toggle content would be rendered here</p>
          </div>
        </details>
      );

    default:
      console.log(`Unsupported block type: ${type}`);
      return null;
    }
  } catch (error) {
    console.error(`Error rendering block ${type}:`, error);
    return (
      <div className="my-4 p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-800 text-sm">
          Error rendering block: {type}
        </p>
      </div>
    );
  }
}

export default function NotionBlockRenderer({ blocks }: NotionBlockRendererProps) {
  if (!blocks || blocks.length === 0) {
    return <div className="text-gray-500">No content available</div>;
  }

  return (
    <div className="prose prose-lg max-w-none">
      {blocks.map((block) => (
        <div key={block.id}>
          {renderBlock(block)}
        </div>
      ))}
    </div>
  );
}
