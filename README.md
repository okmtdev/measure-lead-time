# measure-lead-time

PropertiesService: Key-Valueで文字列を保存できる機能で、主にコードへ直書きしたくないパスワードやAPIキー等の管理に使用されている

- ScriptProperties
  - 保存先：GASプロジェクト
  - method：getScriptProperties()
  - このスクリプト内から、全ユーザーがアクセスできる。GUIでも操作可能。プロジェクト権限があれば参照可能。
- UserProperties
  - 保存先：GASプロジェクト×ユーザ
  - method：getUserProperties()
  - このスクリプト内から、現在のユーザーのみがアクセスできる。設定を保存したユーザ以外参照できない。
- DocumentProperties
  - 保存先：GASプロジェクト×ドキュメント
  - method：getDocumentProperties()
  - ドキュメント,スプレッドシート,フォームから全ユーザーがアクセスできる。別プロジェクト、別ドキュメントだと同じ値を参照できない。