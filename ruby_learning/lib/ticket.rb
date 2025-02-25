class Ticket
  attr_reader :fare, :stamped_at
  def initialize(fare)
    @fare = fare
  end

  def stamp(name)
    # Gateクラスのenterメソッドから渡された乗車駅名を保存
    @stamped_at = name
  end
end