import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.logging.Logger;

/**
 * Parses the DOM to extract out files and folders into a json file
 * ICON="[^"]*"
 */
public class BookmarkParser {

  private static final Logger logger = Logger.getLogger(BookmarkParser.class.getName());
  private static final String BOOKMARK_HTML = "./bookmark.html";
  private Path bookmarkHtml;
  private final List<File> files = new ArrayList<>();
  private final List<Folder> folders = new ArrayList<>();

  private static class File {

    Integer id;
    String name;
    String url;
    Integer folderId;

    private File(Integer id, String name, String url, Integer folderId) {
      this.id = id;
      this.name = name;
      this.url = url;
      this.folderId = folderId;
    }
  }

  private static class Folder {

    Integer id;
    String name;
    Integer parentId;

    private Folder(Integer id, String name, Integer parentId) {
      this.id = id;
      this.name = name;
      this.parentId = parentId;
    }
  }

  public static void main(String[] args) {
    new BookmarkParser().execute();
  }

  private void execute() {
    try {
      bookmarkHtml = Paths.get(BOOKMARK_HTML);

      sanitize();

      Document doc = Jsoup.parse(bookmarkHtml);

      Element body = doc.body();
      Element parent = body.getElementsByAttributeValue("PERSONAL_TOOLBAR_FOLDER", "true").getFirst();
      Elements children = Objects.requireNonNull(parent.nextElementSibling()).children();
      children.forEach(this::extractFilesAndFolder);
    } catch (IOException ioException) {
      logger.severe(ioException.getMessage());
    }
  }

  private void sanitize() {
    try {
      InputStreamReader reader = new InputStreamReader(new FileInputStream(bookmarkHtml.toFile()));
      int read = reader.read();
      int chars  = 0;
      while (read != -1) {
        chars ++;
        logger.info((char) read + "");
        read = reader.read();
      }
      logger.info("Chars are : " + chars);
    } catch (IOException ioException) {
     logger.severe(ioException.getMessage());
    }




  }

  private void extractFilesAndFolder(Element element) {
    System.out.println("");

    if (element.tagName().equals("A")) {

      System.out.println("A tag");
    } else if (element.tagName().equals("H3")) {
      System.out.println("H3 tag");
    }

  }


}