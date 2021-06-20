import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from "../database/config";


const Storing = (file) => {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on(
            'state_changed',
            (snap) => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(percentage);
            },
            (err) => {
                setError(err);
            },
            async () => {
                const url = await storageRef.getDownloadURL();
                const createdAt = timestamp();
                console.log(createdAt);
                collectionRef.add({ url, createdAt }); //url used as a shortened form for url(object's property name)= url(values from above const)
                setUrl(url);
            }
        )
    }, [file])

    return { progress, url, error }
}

export default Storing;