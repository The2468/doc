document.getElementById('uploadForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const response = await fetch('/upload', {
    method: 'POST',
    body: formData
  });
  if (response.ok) {
    alert('File uploaded successfully');
    loadFiles();
  } else {
    alert('Failed to upload file');
  }
});

async function loadFiles() {
  const response = await fetch('/files');
  const files = await response.json();
  const fileList = document.getElementById('fileList');
  fileList.innerHTML = '';
  files.forEach(file => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = `/download/${file}`;
    link.textContent = file;
    li.appendChild(link);
    fileList.appendChild(li);
  });
}

loadFiles();
