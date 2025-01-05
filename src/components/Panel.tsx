import { FileType, FolderType } from "./Home";
import "./styles/Panel.css";

function Panel({ files, folders }: { files: FileType[]; folders: FolderType[] }) {
  return (
    <div className="side-bar">
      <ul className="folder-list">
        {folders.map((f) => (
          <div key={f.id} className="folder-item">
            <i className="fa-regular fa-folder"></i>
            <p>{f.name}</p>
          </div>
        ))}
      </ul>
      <ul className="file-list">
        {files.map((f) => (
          <div key={f.id} className="file-item">
            <i className="fa-regular fa-file"></i>
            <p>{f.name}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Panel;
