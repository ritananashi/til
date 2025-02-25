class Gate
  STATIONS = [:umeda, :juso, :mikuni] # 駅名を配列で用意
  FARES = [160, 190] # 運賃を配列で用意。1区間なら160円（インデックス0）、2区間なら190円（インデックス1）

  def initialize(name)
    @name = name
  end

  def enter(ticket)
    ticket.stamp(@name)
    # Ticketクラスのstampメソッドに乗車駅名を渡して保存。
  end

  def calc_fare(ticket)
    # 駅名の配列から乗車駅と降車駅を検索してインデックスを取得
    from = STATIONS.index(ticket.stamped_at)
    to = STATIONS.index(@name)
    # 降車駅のインデックス - 乗車駅のインデックスで区間の長さを取得
    distance = to - from
    # FARESのインデックスに区間の長さを与えて運賃を取得
    FARES[distance - 1]
  end

  def exit(ticket)
    # 運賃と切符の購入額を比較し、足りているかを判定。
    fare = calc_fare(ticket)
    fare <= ticket.fare
  end
end