
# docker compose  

`docker run`の`--link`オプションを使うと複数のコンテナを連携させて管理できるが、コマンドが長くて複雑になり、複数のコンテナを連携させる開発環境を作るのは非現実的。  
例えば、WordPressをDockerを使って立ち上げるときは、まずDBをrunしてから、  
```
docker run -p 8080:80 -e WORDPRESS_DB_PASSWORD=password -d --name wordpress --link wordpressdb:mysql wordpress:4.7-php5.6
# --linkでwordpressのDBとしてMySQLを指定して、リンクでwordpressのイメージと通信できるようにしている。
```  
というコマンドを打つことでコンテナが立ち上がる。  
`docker compose`とは、ymlファイルという形式の設計図で複数コンテナをまとめて管理できるツール。  
コマンド一つで複数のコンテナを自動で立ち上げできるし、オプションも色々使える。

# docker-compose.yml

ymlファイルはネストで親子関係を表現するファイル形式。  
設定ファイルなどでよく使われる。  
docker-composeは最初に`version: "3"`と`services:`という文言が入る。  
```yml
version: "3" # 3が最新バージョン
services: # この中に稼働するコンテナが入る。
  web: # サービス名。なんでもいい。
    build: ./php # web等の中身。
# buildはDockerfileからビルドするときにつかう。Dockerfileが置いてあるディレクトリへの相対パスを書く
  db:
    image: mariadb: 10.4
# imageはDockerイメージを指定してビルドする。
```
※ほかにもいろいろ書き方がある。参考：[Docker Composeについてざっくり理解する【概要 / ymlファイル書き方 / コマンド操作】](https://qiita.com/gon0821/items/77369def082745d19c38)

絶対パスはコンピューターにディスクの最上位からみたときのパス。
Macだと`/Users/ユーザーフォルダ/任意のフォルダ/php`等。  
ルートからだどっていく書き方で、ユーザーフォルダの名前などが人によって変わってしまう。  
相対パスはとあるファイルからみたパス。docker-compose.ymlだと、docker-compose.ymlからみたパスを書く。  
docker-compose.ymlが/Users/ユーザーフォルダ/任意のフォルダ/phpと同じ階層にあったら、`./php`と書く。  
`./`は同じ階層にあるパスを書く時の書き方。  
相対パスだと、任意のフォルdaの中身が一致していれば、コンピューターの名前は関係なく、隣にあるphpフォルダやdockerfileといった指定ができる。  
誰かにファイルを渡しても、編集せずに同じような書き方ができるので、相対パスで書くのがおすすめ。

# docker-compose書き方
- imageとbuild  
  ```yml
  version: "3" # 3が最新バージョン
  services: # この中に稼働するコンテナが入る。
    web: # サービス名。なんでもいい。
      build: ./php # web等の中身。
  # buildはDockerfileからビルドするときにつかう。Dockerfileが置いてあるディレクトリへの相対パスを書く
    db:
      image: mariadb: 10.4
  # imageはDockerイメージを指定してビルドする。
  ```
  imageとbuildはコンテナイメージを指定する項目。  
  image → DockerHubから指定。  
  build → Dockerfileのパスを指定。  
  必ず実際に動くDockerイメージを指定する必要があるので、service:の下にはbuildかimageのどちらかを書く。書かないとエラーになる。  
  基本はDockerfileからやった方がいいが、カスタマイズする必要がないならimageで持ってきた方が読むほうもわかりやすい。
- container_name  
  コンテナに任意の名前を付ける。  
  `docker run --name`と同じ。
  自由に名前を付けていいが、名前を付けるときは`" "（ダブルクオーテーション）`で囲む。  
  （ただ、調べたら囲んでないものが結構ヒットしたのでなくてもいいのかも…？）  
  すべてのサービスにつけておくのがおすすめ。
- volume  
  `docker run -v`と同じ。  
  コンテナとホストのディレクトリを共有する命令。  
  ```yml
  ...
    volume:
      ホストのパス:コンテナのパス
  ```
  コードやデータや設定ファイルといった必要なデータをホストとコンテナで共有するためにつかう。  
  ホスト側は相対パスで書く。
- ports
  コンテナのポート開放とポートフォワーディングを行うオプション。  
  [ポート開放（読：ポートカイホウ）とは - 「分かりそう」で「分からない」でも「分かった」気になれるIT用語辞典](https://wa3.i-3-i.info/word110593.html)  
  [ポートフォワーディング（読：ポートフォワーディング　英：port forwarding）とは - 「分かりそう」で「分からない」でも「分かった」気になれるIT用語辞典](https://wa3.i-3-i.info/word12663.html)

  ```yml
  version: "3" 
  services:
    web:
      build: ./php
    ports:
      "8080:80" # 改行して" "で囲んで記述する。
  # コンテナのポートを、外には8080番を開放して、開放するところは80番につなぐポートフォワーディングをする。
    db:
      image: mariadb: 10.4
  ```
  `docker run -p`オプションと同じ。  
  webサーバは基本80番ポートで開いているけど、複数のポートがかぶるコンテナは立ち上げられない。  
  なので、ポートフォワーディングで外部公開ポートをずらしてあげることで、一つのPCの中に複数のwebサーバを起動することができる。

# docker composeのコンテナ間通信

docker composeのコンテナ間通信では、サービス名がIPアドレスに変換されるので、アクセスしたい場合はサービス名で指定する。  
```yml
version: "3" 
services:
  web:
    build: ./php
  ports:
    "8080:80"
  db:
    image: mariadb: 10.4
```
docker-compose.ymlのwebやdbはコンテナ名ではないが、docker composeで作られるときに使えるサービス名。  
docker-compose.ymlで指定したときにできるコンテナは、小さなネットワークで囲われている。  
その中で、サービス名をリクエストしたとき、docker composeによってコンテナの内部IPアドレスに変換されるようになっている。  
この仕組みをミニDNSという？  
例えば、google.comと打った時にGoogleに接続するのは、ドメインをIPアドレスに変換しているから。  
これと同じ方法で、サービス名を書くだけで通信ができるようになっている。  
[DNS（読：ディーエヌエス）とは - 「分かりそう」で「分からない」でも「分かった」気になれるIT用語辞典](https://wa3.i-3-i.info/word1287.html)

# Dockerfileとdocker-composeの使い分け

dockerfileに書いたものはdockerイメージになるときに一度だけ実行される。  
インストールコマンドなので、一回dockerファイルができてしまうと変わることはない。  
全員が必ず一致させるものについてはdockerfileのRUNに書いておく。  
そうしたら、dockerイメージになった後に変わることはないので、安定してインストールしておきたいものはdockerfileに書いておく。  

dockerイメージからdockerコンテナになるときに指定したいコマンドや環境変数はdocker-compose.ymlで指定する。  
dockerイメージは、イメージになった時点で設定が確定してしまうので、柔軟に変更したい場合には向いていない。  
柔軟に変更したいものに関しては、docker-compose.ymlに書いたほうがいい。  

例えばLaravelはLaravelフォルダ内のpublicをドキュメントルートとして設定しなければならないが、コンテナで立ち上げたウェブサーバーでは中のファイルを直接いじっても、コンテナが消えるとその設定ファイルも消えてしまう。
なので、自分で用意した設定ファイルをコンテナが立ち上がるときに読み込ませる。
```yml
...
    volumes:
      - 自分で設定した設定ファイルの場所:コンテナの設定ファイルがある場所
```
これで、自分で書いた永続化された設定ファイルが毎回コンテナに適用される。
この設定ファイルの内容が絶対に変わらないのであれば、Dockerfileに書いていいが、設定の内容が変わる可能性があるのであれば、docker-composeに書いたほうがいい。
