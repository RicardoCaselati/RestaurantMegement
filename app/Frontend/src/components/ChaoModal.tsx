import { ModalProps } from "../interface/ModalInterface";

const ChaoModal: React.FC<ModalProps> = ({
  id,
  title,
  content,
  bottom1,
  bottom2,
  onBottom1Click,
  onBottom2Click,
}) => {
  return (
    <div
      className="modal fade"
      id={id}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby={`${id}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={`${id}Label`}>
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{content}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onBottom1Click}
            >
              {bottom1}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onBottom2Click}
            >
              {bottom2}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChaoModal;
