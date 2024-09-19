module Oyaki
    def oyaki_like
        "組み込まれたモジュール内の文字列です。お焼きおいしい"
    end
end

class OyakiInfo
    include Oyaki
end

oyaki_c = OyakiInfo.new
puts oyaki_c.oyaki_like
# includeで組み込んだモジュール内のメソッドはインスタンスメソッドと同じように使える

module Taiyaki
    def taiyaki_like
        "組み込まれたモジュール内の文字列です。たい焼きもおいしい"
    end
end

class TaiyakiInfo
    extend Taiyaki
end

puts TaiyakiInfo.taiyaki_like
# extendで取り込んだモジュール内のメソッドはクラスメソッドを定義した時と同じように使える
# self.taiyaki_likeとおなじ動き方をする