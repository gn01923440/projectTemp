package com.dgi.platform.utils;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.util.Assert;

public class CreateModel {

	private static String functionName;
	private static String tableName = "";
	private static List<String> strTmpList = new ArrayList<String>();
	private static final char UNDERLINE = '_';

	public static void main(String[] args) throws IOException {
		String txtFile = "D:\\git\\dgi_api\\src\\main\\java\\com\\dgi\\platform\\utils\\modelfile.txt";

		String saveModelUrl = "D:\\git\\dgi_api\\src\\main\\java\\com\\dgi\\platform\\model\\";

		String saveRepoUrl = "D:\\git\\dgi_api\\src\\main\\java\\com\\dgi\\platform\\dao\\";

		readFile(txtFile);
		createModel(saveModelUrl);
		createRepo(saveRepoUrl);
		System.out.println("done");

	}

	private static void readFile(String url) throws IOException {
		FileReader fr = new FileReader(url);
		BufferedReader br = new BufferedReader(fr);
		int line = 0;
		String tmp = "";
		while (br.ready()) {
			tmp = br.readLine();
			if (line == 0) {
				functionName = underlineToCamel(tmp, 1);
				tableName = tmp;
			}

			strTmpList.add(tmp);
			line++;
		}
		fr.close();
	}

	private static void createModel(String saveModelUrl) throws IOException {

		Pattern pattern = Pattern.compile("(?<=\\()[^\\)]+");
		System.out.println("functionName: " + functionName);
		System.out.println("tableName: " + tableName);

		FileWriter fw = new FileWriter(saveModelUrl + functionName + ".java");
		fw.write("package com.dgi.platform.model; \n\r\n");

		fw.write("import java.io.Serializable;\r\n\n");
		fw.write("import java.util.Date;\r\n\n");

		fw.write("import javax.persistence.Column;\r\n");
		fw.write("import javax.persistence.Entity;\r\n");
		fw.write("import javax.persistence.GeneratedValue;\r\n");
		fw.write("import javax.persistence.Id;\r\n");
		fw.write("import javax.persistence.Table;\r\n");
		fw.write("import javax.validation.constraints.NotEmpty;\r\n");
		fw.write("import javax.validation.constraints.Size;\r\n");
		fw.write("import javax.persistence.GenerationType;\r\n\n");
		fw.write("import lombok.AllArgsConstructor;\r\n");
		fw.write("import lombok.Builder;\r\n");
		fw.write("import lombok.Data;\r\n");
		fw.write("import lombok.NoArgsConstructor;\r\n\n");
		fw.write("@Data\r\n" + "@NoArgsConstructor\r\n" + "@AllArgsConstructor\r\n" + "@Builder\r\n" + "@Entity\r\n"
				+ "@Table(name = \"" + tableName + "\")\r\n");
		fw.write("public class " + functionName + " implements Serializable{  \n\r");
		fw.write("\tprivate static final long serialVersionUID = 1L;\r\n\n");
		fw.write("\t@Id\r\n");
		fw.write("\t@GeneratedValue(strategy = GenerationType.IDENTITY)\r\n");
		for (int i = 1; i < strTmpList.size(); i++) {
			String line = strTmpList.get(i);
			if (line.indexOf("#") != -1)
				break;

			String lineArr[] = line.split("\\s+");// 依空白分割

			String col_eng = lineArr[0];// 英文欄位
			String col_cn = lineArr[1];// 中文欄位
			String col_typ = lineArr[2];// Type

			if (lineArr.length > 3) {
				fw.write("\t@NotEmpty(message = \"" + col_cn + "不可為空\")\r\n");
			}
			if (i != 1) {
				Matcher matcher = pattern.matcher(col_typ);
				if (matcher.find())
					fw.write("\t@Size(max=" + matcher.group() + ", message = \"" + col_cn + "長度不可超過" + matcher.group()
							+ "\")\r\n");
			}
			fw.write("\t@Column(name= \"" + col_eng + "\", columnDefinition = \"" + lineArr[2] + "\")\r\n");

			switch (col_typ) {
			case "INT":
				fw.write("\tprivate Integer " + underlineToCamel(col_eng, 2) + ";// " + col_cn + "\r\n\n");
				break;
			case "DATETIME":
				fw.write("\tprivate Date " + underlineToCamel(col_eng, 2) + ";// " + col_cn + "\r\n\n");
				break;
			case "DECIMAL(7,4)":
				fw.write("\tprivate BigDecimal " + underlineToCamel(col_eng, 2) + ";// " + col_cn + "\r\n\n");
				break;
			default:
				fw.write("\tprivate String " + underlineToCamel(col_eng, 2) + ";// " + col_cn + "\r\n\n");
				break;
			}
		}
		fw.write("}                           ");
		fw.flush();
		fw.close();

	}

	private static void createRepo(String saveRepoUrl) throws IOException {
		FileWriter fw = new FileWriter(saveRepoUrl + functionName + "Repository.java");
		fw.write("package com.dgi.platform.dao; \n\r\n");

		fw.write("import org.springframework.data.jpa.repository.JpaRepository;\r\n\n");

		fw.write("import com.dgi.platform.model." + functionName + ";\r\n\n");

		fw.write("public interface " + functionName + "Repository extends JpaRepository<" + functionName
				+ ", String> {\r\n\n");

		fw.write("}                           ");
		fw.flush();
		fw.close();

	}

	public static String underlineToCamel(String name, int type) {
		Assert.notNull(name, "The 'name' must not be null!");
		name = name.trim();
		int len = name.length();
		StringBuilder sb = new StringBuilder(len);
		for (int i = 0; i < len; i++) {
			char c = name.charAt(i);
			if (i == 0) {
				if (type == 1) {
					sb.append(c);
				} else {
					sb.append(Character.toLowerCase(c));
				}
				continue;
			}
			if (c == UNDERLINE) {
				if (++i < len) {
					sb.append(Character.toUpperCase(name.charAt(i)));
				}
			} else {
				sb.append(Character.toLowerCase(c));
			}
		}
		return sb.toString();
	}
}
