import {Button} from "antd";

export default function GroupButton({onReset, onPreview, onCancel, submitting}) {
    return (
        <div className="group-button">
            <Button htmlType="button" onClick={onReset} className="btn-clear">
                Delete all
            </Button>
            <Button type="primary" className="btn-submit"  onClick={onPreview}>
                Preview
            </Button>
            <Button htmlType="button" onClick={onCancel} className="btn-cancel">
                Cancel
            </Button>
            <Button disabled={submitting} type="primary" htmlType="submit"  className="btn-submit">
                {submitting ? 'Saving...' : 'Save'}
            </Button>
        </div>
    )
}