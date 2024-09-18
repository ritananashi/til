class Oyaki
    def initialize(taste, price)
        puts "newメソッドでインスタンスが生成されました"
        puts "initializeメソッドが実行されました"
        @taste = taste #@tasteに、引数に渡された値を代入
        puts "@tasteに#{taste}が代入されました"
        @price = price
        puts "@priceに#{price}が代入されました"
    end

    #ゲッターメソッド（インスタンス変数を外部から参照するためのメソッド
    def taste
        @taste #"クリーム"を呼び出し元へ返す
    end

    def price
        @price
    end

    #セッターメソッド（インスタンス変数を外部から変更するためのメソッド）
    def taste=(taste)
        puts "@tasteの値が#{taste}に変更されました"
        @taste = taste
    end

    def price=(price)
        puts "@priceの値が#{price}に変更されました"
        @price = price
    end

    def show_info
        puts "インスタンスメソッドが実行されました"
        puts "#{@taste}味のお焼きは#{@price}円です。"
    end
end

oyaki_c = Oyaki.new("クリーム", 250) #Oyakiクラスのインスタンスを変数に代入
p oyaki_c.taste
p oyaki_c.price

oyaki_c.taste = "あんこ"
oyaki_c.price = "200"

p oyaki_c.taste
p oyaki_c.price