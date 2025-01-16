import { useEffect, useState } from "react";
import "./styles/Home.css";
import Panel from "./Panel";

const url = "https://raw.githubusercontent.com/drsqrt/files/refs/heads/main/public/resources.json";

export type FileType = {
  id: number;
  name: string;
  url: string;
  folderId: number;
};

export type FolderType = {
  id: number;
  name: string;
  parentId: number;
};

function Home() {
  const [files, setFiles] = useState<FileType[]>([]);
  const [folders, setFolders] = useState<FolderType[]>([]);
  const [openPanels, setOpenPanels] = useState<number[]>([0]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setFiles(json.files);
      setFolders(json.folders);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFolderClick = (folderId: number) => {
    setOpenPanels((prevPanels) => {
      const existingIndex = prevPanels.indexOf(folderId);
      if (existingIndex !== -1) {
        return prevPanels.slice(0, existingIndex + 1); // Close panels to the right of the clicked one.
      }
      return [...prevPanels, folderId];
    });
  };

  return (
    <div className="home">
      {openPanels.map((folderId, index) => {
        const currentFolders = folders.filter((f) => f.parentId === folderId);
        const currentFiles = files.filter((f) => f.folderId === folderId);
        return <Panel key={index} folders={currentFolders} files={currentFiles} onFolderClick={handleFolderClick} />;
      })}
    </div>
  );
}
export default Home;
