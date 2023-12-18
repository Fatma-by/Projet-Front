import React, { useEffect, useRef, useState } from 'react';

function UploadWidget() {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    const [uploadedFile, setUploadedFile] = useState(null);

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
                cloudName: 'dtc79sa4o',
                uploadPreset: 'v8tfokdr'
            },
            function (error, result) {
                if (!error && result && result.event === 'success') {
                    setUploadedFile({
                        public_id: result.info.public_id,
                        url: result.info.secure_url,
                        format: result.info.format
                    });
                }
            }
        );
    }, []);

    return (
        <div>
            <button onClick={() => widgetRef.current.open()}>
                Open Widget
            </button>

            {uploadedFile && (
                <div>
                    <p>Fichier téléchargé :</p>
                    <p>Public ID : {uploadedFile.public_id}</p>
                    <p>URL : {uploadedFile.url}</p>
                    <p>Format : {uploadedFile.format}</p>
                    <iframe title="PDF Viewer" width="600" height="400" src={uploadedFile.url} />
                </div>
            )}
        </div>
    );
}

export default UploadWidget;
