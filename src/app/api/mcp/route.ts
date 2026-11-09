import { NextResponse } from 'next/server';
import { corsHeaders, handleCorsOptions } from '@/lib/cors';

export const runtime = 'edge';

export async function OPTIONS() {
  return handleCorsOptions();
}

export async function GET() {
  const mcpPayload = {
    mcpVersion: '1.0.0',
    provider: {
      name: 'AEObility',
      url: 'https://aeobility.com.au',
      '@id': 'https://aeobility.com.au/#organization'
    },
    publisher: {
      name: 'AEObility',
      url: 'https://aeobility.com.au',
      '@id': 'https://aeobility.com.au/#organization'
    },
    tools: [
      {
        name: 'get_organization_entity',
        description: 'Retrieves canonical consensus facts, brand graphs, and identifiers for AEObility.',
        inputSchema: { type: 'object', properties: {} },
        outputSchema: { type: 'object', description: 'Returns Schema.org Organisation graph data.' }
      },
      {
        name: 'get_founder_entity',
        description: "Retrieves the personal entity profile for Vince Baker, linking him to AEObility's corporate graph.",
        inputSchema: { type: 'object', properties: {} },
        outputSchema: { type: 'object', description: 'Returns Schema.org Person graph data.' }
      },
      {
        name: 'query_knowledge_hub_node',
        description: 'Searches semantic lattice links and Atomic Answer Blocks within the Knowledge Hub.',
        inputSchema: {
          type: 'object',
          properties: {
            conceptNode: {
              type: 'string',
              enum: [
                'AEO', 'Semantic Lattice', 'Atomic Answer Blocks', 'Brand Consensus', 
                'Query Fan-out', 'Structured Data', 'Semantic SEO', 'Positional Bias', 
                'AI Visibility Telemetry', 'Entity Modelling'
              ],
              description: 'The target concept node being investigated.'
            }
          },
          required: ['conceptNode']
        },
        outputSchema: { type: 'object', description: 'Returns a matching TechArticle with embedded Q&A blocks.' }
      },
      {
        name: 'get_service_module',
        description: 'Fetches technical specs and commercial blueprints for AEObility frameworks.',
        inputSchema: {
          type: 'object',
          properties: {
            framework: { type: 'string', enum: ['90-Day AI Success Blueprint', 'Schema Validation Audit'] }
          },
          required: ['framework']
        },
        outputSchema: { type: 'object', description: 'Returns the Service node details including pricing.' }
      }
    ]
  };

  return NextResponse.json(mcpPayload, {
    headers: corsHeaders,
  });
}
