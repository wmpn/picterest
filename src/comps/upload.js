import React, { useState } from 'react';
import ProgressBar from '../comps/progressBar';

const UploadForm = () => {

    const [file, setfile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const uploadHandler = (e) => {
        let upload = e.target.files[0];
        if (upload && types.includes(upload.type)) {
            setfile(upload);
            setError('');
        } else {
            setfile(null);
            setError('Please select an image file (png or jpeg)');
        }

    }

    return (
        <form>
            <label htmlFor="input-file">+</label>
            <input id="input-file" type="file" onChange={uploadHandler} hidden />
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setfile={setfile} />}
            </div>
        </form>
    )
}

export default UploadForm;