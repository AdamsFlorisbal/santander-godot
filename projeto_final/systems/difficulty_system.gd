extends Node
@export var mob_spawner: MobSpawner
@export var initial_spawm_rate: float = 60.0
@export var spaw_rate_per_minute: float = 30.0
@export var wave_duration: float = 20.0
@export var break_intensity: float = 0.5
var time: float = 0.0

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float) -> void:
	if GameManager.is_game_over: return
	
	time += delta
	var spawn_rate = initial_spawm_rate + spaw_rate_per_minute * (time / 60)
	
	var sin_wave = sin((time * TAU) / wave_duration)
	var wave_factor = remap(sin_wave, -1.0, 1.0, break_intensity, 1)
	spawn_rate *= wave_factor
	print(spawn_rate)
	MobSpawner.new()
	mob_spawner.mobs_per_minute = spawn_rate
