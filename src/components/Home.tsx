import { useEffect, useState, useMemo } from "react";
import "./styles/Home.css";
import Panel from "./Panel";

const url: string = "https://raw.githubusercontent.com/drsqrt/library/refs/heads/main/public/resources.json";
const BASE_PARENT_ID: number = 0;

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
  const [highlightedFolders, setHighlightedFolders] = useState<number[]>([]);

  const parentMap = useMemo(
    () =>
      folders.reduce((map, folder) => {
        map[folder.id] = folder.parentId;
        return map;
      }, {} as Record<number, number>),
    [folders]
  );

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setFiles(json.files || []);
      setFolders(json.folders || []);
    } catch (err) {
      console.error("Error fetching data: ", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFolderClick = (folderId: number) => {
    setOpenPanels(() => {
      let updatedOpenPanels: number[] = [];
      let currentFolderId: number = folderId;
      while (currentFolderId !== BASE_PARENT_ID) {
        updatedOpenPanels.push(currentFolderId);
        currentFolderId = parentMap[currentFolderId] || BASE_PARENT_ID;
      }
      updatedOpenPanels.push(BASE_PARENT_ID);
      return updatedOpenPanels.reverse();
    });
    setHighlightedFolders(() => {
      let updatedHighlightedFolders: number[] = [];
      let currentFolderId: number = folderId;
      while (currentFolderId != BASE_PARENT_ID) {
        updatedHighlightedFolders.push(currentFolderId);
        currentFolderId = parentMap[currentFolderId] || BASE_PARENT_ID;
      }
      return updatedHighlightedFolders;
    });
  };

  return (
    <div className="home">
      {openPanels.map((folderId, _) => {
        const currentFolders = folders.filter((f) => f.parentId === folderId);
        const currentFiles = files.filter((f) => f.folderId === folderId);
        return (
          <Panel
            key={folderId}
            folders={currentFolders}
            files={currentFiles}
            onFolderClick={handleFolderClick}
            highlightedFolders={highlightedFolders}
          />
        );
      })}
    </div>
  );
}
export default Home;
