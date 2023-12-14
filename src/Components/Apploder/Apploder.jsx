import React, { useEffect, useRef } from 'react';

function UploadWidget() {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dtc79sa4o',
            uploadPreset: 'v8tfokdr '
        }, function (error, result) {
            console.log(result,'here');
        

        });
    }, []);

    return (
        <button onClick={() => widgetRef.current.open()}>
            Open Widget
        </button>
    );
}

export default UploadWidget;
