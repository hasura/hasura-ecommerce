#!/usr/bin/env ruby
require 'pp'
require 'yaml'
require 'ostruct'
require 'optparse'

def process_tables_yaml_files(filenames)
  filenames.map { |it| YAML.load_file(it) }
end

# Create options struct and set defaults
options = OpenStruct.new
options.output = $stdout
# If a list of files was given as args, use those, else default to globbing current dir for YAML files
options.yaml_files = if ARGV.length != 0 then ARGV else Dir.glob('./**.y*ml').sort end

OptionParser.new do |opts|
  opts.on('-o file', '--out file', String, "Output file") do |file|
    options.output = File.open(file, "w")
  end
end.parse!

yaml_res = options.yaml_files.map { |it| YAML.load_file(it) }.select(&:itself)
options.output.puts YAML.dump(yaml_res)