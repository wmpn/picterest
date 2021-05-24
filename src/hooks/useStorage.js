import { useState, useEffect } from 'react';
import { projectStorage } from "../database/config";


const Storing = (file) => {

    const [progess, setProgess] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name);

        storageRef.put(file).on(
            'state_changed',
            (snap) => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgess(percentage);
            },
            (err) => {
                setError(err);
            },
            async () => {
                const url = await storageRef.getDownloadURL();
                setUrl(url);
            }
        )
    }, [file])

    return { progess, url, error }
}

export default Storing;