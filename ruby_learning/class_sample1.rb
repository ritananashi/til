class Taiyaki
    def initialize(taste, price)
        puts "#{taste}味のたいやきは#{price}円です"
        puts "initializeメソッドが実行されました"
    end
end

Taiyaki.new("あんこ", 250)