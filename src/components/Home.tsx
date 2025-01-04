import { useEffect, useState } from "react";
import "./styles/Home.css";

const url = "https://raw.githubusercontent.com/drsqrt/files/refs/heads/main/resources/resources.json";

type FileType = {
  id: number;
  name: string;
  url: string;
  folderId: number;
};

type FolderType = {
  id: number;
  name: string;
  parentId: number;
};

function Home() {
  const [files, setFiles] = useState<FileType[] | null>(null);
  const [folders, setFolders] = useState<FolderType[] | null>(null);
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

  return (
    <div className="home">
      <div className="left-panel">
        <menu>
          <li>Articles</li>
          <li>Books</li>
          <li>Papers</li>
        </menu>
      </div>
    </div>
  );
}
export default Home;
