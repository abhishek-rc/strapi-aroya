/**
 * Test script for header API endpoint
 * Tests that the /api/headers endpoint returns both header and header_navigation data
 */

const http = require('http');

const testEndpoint = () => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 1337,
      path: '/api/headers',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve({ statusCode: res.statusCode, data: jsonData });
        } catch (error) {
          reject(new Error(`Failed to parse JSON: ${error.message}\nResponse: ${data}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error('Request timeout - server may not be running'));
    });

    req.end();
  });
};

// Wait a bit for server to start, then test
setTimeout(async () => {
  console.log('Testing /api/headers endpoint...\n');
  
  try {
    const result = await testEndpoint();
    
    console.log('✅ Request successful!');
    console.log(`Status Code: ${result.statusCode}\n`);
    
    if (result.statusCode === 200) {
      console.log('Response Structure:');
      console.log(JSON.stringify(result.data, null, 2));
      
      console.log('\n--- Analysis ---');
      
      if (result.data.data) {
        const data = result.data.data;
        const isArray = Array.isArray(data);
        const headerData = isArray ? data[0] : data;
        
        console.log(`✅ Header data found: ${isArray ? `Array with ${data.length} items` : 'Single object'}`);
        
        if (headerData) {
          console.log(`✅ Header fields: ${Object.keys(headerData).filter(k => k !== 'header_navigation').join(', ')}`);
          
          if ('header_navigation' in headerData) {
            if (headerData.header_navigation !== null) {
              console.log('✅ header_navigation data included!');
              console.log(`   Navigation structure: ${JSON.stringify(Object.keys(headerData.header_navigation || {})).substring(0, 100)}...`);
            } else {
              console.log('⚠️  header_navigation is null (navigation may not exist or failed to load)');
            }
          } else {
            console.log('❌ header_navigation field missing from response');
          }
        }
      } else {
        console.log('⚠️  No data field in response');
      }
    } else {
      console.log(`⚠️  Unexpected status code: ${result.statusCode}`);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('\nMake sure Strapi server is running on port 1337');
    console.log('Start it with: npm run dev');
  }
}, 10000); // Wait 10 seconds for server to start

