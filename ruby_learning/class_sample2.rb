class Oyaki
    def initialize(taste, price)
        puts "newメソッドでインスタンスが生成されました"
        puts "initializeメソッドが実行されました"
        @taste = taste #@tasteに、引数に渡された値を代入
        puts "@tasteに#{taste}が代入されました"
        @price = price
        puts "@priceに#{price}が代入されました"
    end

    def show_info
        puts "インスタンスメソッドが実行されました"
        puts "#{@taste}味のお焼きは#{@price}円です。"
    end
end

oyaki_a = Oyaki.new("クリーム", 250) #Oyakiクラスのインスタンスを変数に代入
oyaki_a.show_info

oyaki_c = Oyaki.new("あんこ", 200) #oyaki_aとは別のインスタンスを変数に代入
oyaki_c.show_info