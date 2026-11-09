import fs from 'fs';
import path from 'path';

console.log('🔍 Starting AEObility Brand Facts & Schema Cross-Validation...');

const schemaPath = path.join(process.cwd(), 'public', 'brand-facts.json');
if (!fs.existsSync(schemaPath)) {
  console.error('❌ Error: public/brand-facts.json missing!');
  process.exit(1);
}

const rawData = fs.readFileSync(schemaPath, 'utf-8');
const schema = JSON.parse(rawData);

if (!schema['@graph'] || !Array.isArray(schema['@graph'])) {
  console.error('❌ Error: @graph array missing from brand-facts.json!');
  process.exit(1);
}

const products = schema['@graph'].filter(p => p['@type'] === 'Product' || p.sku);
console.log(`✅ Loaded ${products.length} product SKUs from brand-facts.json`);

const requiredSkus = [
  'BPSTRAT', 'SS1MACRO', 'SS1MICRO1', 'SS1MICRO2', 'SS1MICRO3', 'SS1MICRO4',
  'SS2MACRO', 'SS2MICRO1', 'SS2MICRO2', 'SS2MICRO3', 'SS2MICRO4',
  'SS3MACRO', 'SS3MICRO1', 'SS3MICRO2', 'SS3MICRO3',
  'SS4MACRO', 'SS4MICRO1', 'SS4MICRO2', 'SS4MICRO3'
];

const foundSkus = new Set(products.map(p => p.sku));
let errors = 0;

for (const sku of requiredSkus) {
  if (!foundSkus.has(sku)) {
    console.error(`❌ Missing SKU: ${sku}`);
    errors++;
  }
}

for (const product of products) {
  if (!product.price || isNaN(parseFloat(product.price))) {
    console.error(`❌ Invalid price for SKU ${product.sku}: ${product.price}`);
    errors++;
  }
  if (!product.offers || !Array.isArray(product.offers.itemOffered) || product.offers.itemOffered.length === 0) {
    console.error(`❌ Missing deliverables array for SKU ${product.sku}`);
    errors++;
  }
}

if (errors > 0) {
  console.error(`❌ Validation failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('🎉 Brand Facts & Pricing JSON-LD Schema Cross-Validation PASSED successfully!');
}
