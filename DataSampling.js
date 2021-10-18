import plotly.figure_factory as ff
import statistics
import random
import pandas as pd
import csv

df = pd.read_csv("data.csv")
data = df["temp"].tolist()
population_mean = statistics.mean(data)
std_deviation = statistics.stdev(data)
print("population mean:- ",population_mean)
print("std_daviation:- ",std_deviation)

def show_fig(mean_list):
    df = mean_list
    fig = ff.create_displot([df],["temp"], show_hist=False)
    fig.show()
