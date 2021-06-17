#!/usr/bin/env ruby
require 'pp'
require 'ostruct'
require 'optparse'

default_identifiers = ["/* TABLE */", "/* FOREIGN KEYS */", "/* TRIGGERS */"]

# Process a list of SQL file names by opening + reading text from each,
# then finding matching sections based on identifiers + putting them in hash
def process_sql_files(sql_files, identifiers)
  output = identifiers.product([""]).to_h
  current_identifier = nil

  sql_files.each do |name|
    File.foreach(name) do |line|
      # For each line, if the line matches one of the identifiers, switch current_identifier to it
      matched_identifier = identifiers.select { |it| line.include? it }.first
      if matched_identifier then
        current_identifier = matched_identifier
        next
      end
      # Else, add the line to the identifier block key that it belongs to in results hash
      output[current_identifier] += line if current_identifier
    end
  end

  return output
end

# Create options struct and set defaults
options = OpenStruct.new
# Output defaults to stdout, but if a file is passed, output will be a writestream to that file instead.
# Calling options.output.puts(str) will either print to stdout or write a line to the file.
options.output = $stdout
options.identifiers = default_identifiers
# If a list of files was given as args, use those, else default to globbing current dir for SQL files
options.files = if ARGV.length != 0 then ARGV else Dir.glob('./**.sql').sort end

OptionParser.new do |opts|
  opts.on('-o file', '--out file', String, "Output file") do |file|
    options.output = File.open(file, "w")
  end
  opts.on("-i '/* TABLES */','/* FOREIGN KEYS */,'/* Triggers */'",
          "--identifiers '/* TABLES */','/* FOREIGN KEYS */,'/* Triggers */'",
          Array, "Set identifiers") do |identifiers|
    options.identifiers = identifiers
  end
end.parse!

results = process_sql_files(options.files, options.identifiers)
results.each do |identifier, text|
  options.output.puts(text)
end