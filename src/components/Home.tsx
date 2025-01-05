import { useEffect, useState } from "react";
import "./styles/Home.css";
import Panel from "./Panel";

const url = "https://raw.githubusercontent.com/drsqrt/files/refs/heads/main/resources/resources.json";

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

  if (false) console.log(files);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home">
      <Panel files={[]} folders={folders.filter((f) => f.parentId === 0)}></Panel>
    </div>
  );
}
export default Home;
