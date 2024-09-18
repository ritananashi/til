class Oyaki
    attr_accessor :taste, :price #アクセサメソッドを定義

    @@total_oyaki_count = 0 #クラス変数でインスタンスが何個生成されたかをカウント

    def initialize(taste, price)
        puts "newメソッドでインスタンスが生成されました"
        puts "initializeメソッドが実行されました"
        @taste = taste #@tasteに、引数に渡された値を代入
        puts "@tasteに#{taste}が代入されました"
        @price = price
        puts "@priceに#{price}が代入されました"
        @@total_oyaki_count += 1
        #newメソッドでインスタンスが生成されるたびに値が一つ加算される
        puts "#{@@total_oyaki_count}個目のお焼きです"
    end

    def show_info
        puts "インスタンスメソッドが実行されました"
        puts "#{@taste}味のお焼きは#{@price}円です。"
    end

    def self.show_all_count
        puts "お焼きは全部で#{@@total_oyaki_count}個作成されました"
    end
end

Oyaki.new("クリーム", 250)
Oyaki.new("あんこ", 200)
Oyaki.new("抹茶", 300)
Oyaki.new("かぼちゃ", 300)

Oyaki.show_all_count