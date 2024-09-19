module Oyaki
    TASTE = "クリーム"
    PRICE = 250
end

class OyakiInfo
    include Oyaki

    def show_oyaki
        puts "#{TASTE}味のお焼きは#{PRICE}円です"
        # includeで組み込んだモジュールの定数は#{定数名}で使用できる
    end
end

oyaki_c = OyakiInfo.new
oyaki_c.show_oyaki