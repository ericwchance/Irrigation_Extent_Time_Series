# Irrigation_Extent_Time_Series
Using Google Earth Engine, to classify irrigated and non-irrigated lands in Idaho's Snake River Plain using Landsat. 
Classification is based on a binary classification of seasonal NDMI (normalized difference water or moisture index) (also called NDWI).
Classifications are perfomed for each year using Landsat data (1984-2016).
This could easily be adapted to other regions, if you wanted to. All you need is a training dataset for your region. 

The basic workflow is as follows:
1. determine thresholds on seasonal Max NDMI for set control points: 

   A. Export values at control points.

   B. organize them into 2 columns of irrigated and non irrigated values.

   C. Put that data into matlab to get a threshold for each year. 
2. Apply those yearly thresholds to each year's data.
3. Export desired information, such as the extent of irrigation by county or water right.
