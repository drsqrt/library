import "./styles/Panel.css";

export type PanelProps = {
  folders: { id: number; name: string }[];
  files: { id: number; name: string; url: string }[];
  onFolderClick: (folderId: number) => void;
};

function Panel({ folders, files, onFolderClick }: PanelProps) {
  return (
    <div className="side-bar">
      <div className="folder-list">
        {folders.map((folder) => (
          <div key={folder.id} className="folder-item" onClick={() => onFolderClick(folder.id)}>
            <i className="fa-regular fa-folder"></i>
            {folder.name}
          </div>
        ))}
      </div>
      <div className="file-list">
        {files.map((file) => (
          <div key={file.id} className="file-item">
            <i className="fa-regular fa-file"></i>
            {file.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Panel;
