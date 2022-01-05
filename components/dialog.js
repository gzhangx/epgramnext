import react, {useState} from "react";
export function Dialog(props) {    
    const { dialogInfo, setDialogInfo, children } = props;
    const { title, body } = dialogInfo;
    console.log('dialog info')
    console.log(dialogInfo)
    const dspClassName = `${dialogInfo.show ? 'modal fade show' : 'modal'}`;
    return <div className={dspClassName} tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{ title }</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                {
                    children 
                }   
                {
                    !children && <><div className="modal-body">
                        <p>{body}</p>
                    </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => {
                                setDialogInfo({
                                    show:false,
                                })
                            }}>Close</button>
                        </div>
                    </>
                }
            </div>
        </div>
    </div>;
}