interface User {
  username: string;
  displayedName: string;
  bio: string;
  role: number;
  email: string;
  md5: string;
  active: boolean;
}

interface UserEditorConfig {
  fontSize: number;
  theme: string;
  indentType: 0 | 1;
  tabSize: number;
  language: 0 | 1 | 2;
}

interface UserProperties extends User {
  editorConfig: UserEditorConfig;
}
