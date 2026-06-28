const app = document.getElementById('app');

async function loadHealth() {
  try {
    const response = await fetch('http://localhost:8080/api/health');
    const data = await response.json();
    app.innerHTML = `
      <h1>OpenShift CRC Test</h1>
      <p>Status: ${data.status}</p>
      <p>Service: ${data.service}</p>
      <p>Message: ${data.message}</p>
    `;
  } catch (error) {
    app.innerHTML = `<p>Could not reach backend: ${error.message}</p>`;
  }
}

loadHealth();
