import {Upload} from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';

export default function UploadImages({fileLists, action, removeAction, isRoundStyle = false}) {
    const imageUpload = async options => {
        const { onSuccess, onError, file } = options;
        const data = new FormData();
        data.append('file', file);

        try {
            const res = await fetch(`/api/upload`, {
                method: 'POST',
                body: data,
            })
            const json = await res.json()
            onSuccess("Ok");
            if (json)
                action(json);

        } catch (exception) {
            const error = new Error("Some error");
            onError({ error });
        }
    };
    const handleRemoveId = itemId => {
        console.log(itemId)
        removeAction(itemId)
    }
    const props = {
        name: 'file',
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                console.log(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                console.log(`${info.file.name} file upload failed.`);
            }
            console.log(info)
        },
    };
    if (fileLists.length)
        return (
            <>
            {fileLists.length && fileLists.map(item => (
                <div className={isRoundStyle ? 'round ant-upload-list-picture-card-container' : 'ant-upload-list-picture-card-container'}
                     key={`div-upload-${item.uid}`}>
                    <img src={item.url} alt="" key={item.uid}/>
                    <div className="remove-upload-card">
                        <CloseOutlined onClick={() => handleRemoveId(item.uid)}/>
                    </div>
                </div>
            ))}
                <Upload {...props} customRequest={imageUpload} fileList={fileLists} listType="picture-card" showUploadList={false}>
                    <PlusOutlined />
                </Upload>
            </>
    )

    return (
        <>
            <Upload {...props} customRequest={imageUpload} fileList={fileLists} listType="picture-card" showUploadList={false}>
                <PlusOutlined />
            </Upload>
        </>
    )
}
