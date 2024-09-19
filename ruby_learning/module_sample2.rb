module Oyaki
    TASTE = "クリーム"
    PRICE = 250
end

class OyakiInfo
    extend Oyaki

    def show_oyaki
        puts "#{Oyaki::TASTE}味のお焼きは#{Oyaki::PRICE}円です"
        # extendで組み込んだモジュールの定数は#{モジュール名::定数名}で使用できる
    end
end

oyaki_c = OyakiInfo.new
oyaki_c.show_oyaki