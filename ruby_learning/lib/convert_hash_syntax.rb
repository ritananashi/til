def convert_hash_syntax(old_syntax)
  old_syntax.gsub(/:(\w+) *=> */) do
    "#{$1}: "
  end
end

# :の後に半角英数があり、そのあとに半角スペースが0個以上、=>が続き、その後に半角スペースが0個以上ある場合にマッチする正規表現
# マッチしたら、半角英数の部分をキャプチャして"文字列: "の形に置換する。