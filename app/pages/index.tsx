// pages/index.tsx
import { useState } from 'react';

export default function PDF() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleDownload = async () => {
    alert('do you want to download')
    const response = await fetch(
      `/api/generate-pdf?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}`
    );

    alert(response)
    console.log(response)

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    
    console.log(url)
    // Download the PDF file
    const link = document.createElement('a');
    link.href = url;
    link.download = 'document.pdf';
    link.click();
    URL.revokeObjectURL(url);

    
    console.log('url is down here')
    alert(response.status)
    if (response.ok) {
      // const blob = await response.blob();
      // const url = URL.createObjectURL(blob);
      
      // console.log(url)
      // // Download the PDF file
      // const link = document.createElement('a');
      // link.href = url;
      // link.download = 'document.pdf';
      // link.click();
      // URL.revokeObjectURL(url);
      // console.log(url)
    } else {
      
      alert('Failed to generate PDF');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>PDF Generator</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
}



