import axios from 'axios';

const IMAGE_FILE_PATTERN = /image-*/;

export default async function handler(file) {
    if (file) {
        if (!file.type.match(IMAGE_FILE_PATTERN)) {
            // Better to use a banner instead of an alert.
            alert('Invalid image type');
            return;
        }
        const formData = new FormData();

        formData.append('image', file);

        return axios.post('/api/upload', formData, { 
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (progressEvent) => {
                console.log('Complete Percentage: ' + Math.round((progressEvent.loaded * 100) / progressEvent.total ))
            }
        })
    }
};