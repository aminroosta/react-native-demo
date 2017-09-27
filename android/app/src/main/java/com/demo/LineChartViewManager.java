package com.demo;

import android.graphics.Color;
import android.view.DragEvent;
import android.view.View;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.github.mikephil.charting.charts.LineChart;
import com.github.mikephil.charting.components.AxisBase;
import com.github.mikephil.charting.components.Description;
import com.github.mikephil.charting.components.XAxis;
import com.github.mikephil.charting.components.YAxis;
import com.github.mikephil.charting.data.Entry;
import com.github.mikephil.charting.data.LineDataSet;
import com.github.mikephil.charting.data.LineData;
import com.github.mikephil.charting.formatter.IAxisValueFormatter;
import com.github.mikephil.charting.highlight.Highlight;
import com.github.mikephil.charting.interfaces.datasets.ILineDataSet;
import com.github.mikephil.charting.utils.ColorTemplate;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class LineChartViewManager extends SimpleViewManager<LineChart> {

    public static final String REACT_CLASS = "LineChartViewManager";
    private int startEpoch = 0;
    private int endEpoch = 0;
    private IAxisValueFormatter dateFormatter = new IAxisValueFormatter() {
        final SimpleDateFormat hourMinuteFormat = new SimpleDateFormat("HH:mm");
        final SimpleDateFormat minuteSecondFormat = new SimpleDateFormat("HH:mm:ss");
        @Override
        public String getFormattedValue(float value, AxisBase axis) {
            long sec = (long)(value) + startEpoch;
            Date date = new Date(sec*1000);

            if(endEpoch - startEpoch > 2*60)
                return hourMinuteFormat.format(date);
            return minuteSecondFormat.format(date);
        }
    };

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected LineChart createViewInstance(ThemedReactContext reactContext) {
        LineChart chart = new LineChart(reactContext);

        final LineData data = new LineData();
        chart.setData(data);

        XAxis xAxis = chart.getXAxis();
        xAxis.setPosition(XAxis.XAxisPosition.BOTTOM);
        xAxis.setDrawGridLines(false);
        xAxis.setDrawAxisLine(false);
        xAxis.setTextSize(8);
        xAxis.setTextColor(Color.rgb(75,75,75));
        xAxis.setValueFormatter(dateFormatter);

//        chart.getAxisLeft().setEnabled(false);
        chart.getAxisLeft().setDrawGridLines(false);
        chart.getAxisLeft().setDrawAxisLine(false);
        chart.setDrawGridBackground(false);         // grid background
        chart.setDrawBorders(false);                // borders
        chart.setAutoScaleMinMaxEnabled(true);      // auto scale
        chart.setDoubleTapToZoomEnabled(false);     // tap to zoom
        chart.getAxisLeft().setDrawZeroLine(false);
        chart.getAxisRight().setEnabled(false);     // right axis
        chart.getDescription().setEnabled(false);   // description
        chart.setHighlightPerTapEnabled(false);     // highlight per tap
        chart.setHighlightPerDragEnabled(false);    // highlight per drag
        chart.setClipValuesToContent(true);         // clip to content
        chart.setPinchZoom(false);                  // pinch zoom
        chart.setMinOffset(5.0f);                   // offset
        chart.setDragOffsetY(0);
        chart.setDragEnabled(true);
        chart.getXAxis().setDrawLabels(true);      // draw labels
        chart.getLegend().setEnabled(false);        // legend

        chart.invalidate();

        return chart;
    }

    @ReactProp(name = "data")
    public void setData(LineChart chart, ReadableMap dataMap) {
        ReadableArray xsArray = dataMap.getArray("xs");
        ReadableArray ysArray = dataMap.getArray("ys");
        int size = Math.min(xsArray.size(), ysArray.size());
        if(size == 0) { return; }

        LineData data = chart.getData();

        ILineDataSet set = data.getDataSetByIndex(0);
        boolean firstTime = false;
        if (set == null) {
            set = createSet();
            data.addDataSet(set);
            firstTime = true;
        }

        if(startEpoch == 0) { startEpoch = xsArray.getInt(0); }
        endEpoch = xsArray.getInt(xsArray.size() - 1);

        for (int inx = 0; inx < size; ++inx) {
            float x = (float)(xsArray.getInt(inx) - startEpoch);
            float y = (float)ysArray.getDouble(inx);
            data.addEntry(new Entry(x, y), 0);
        }

        data.notifyDataChanged();
        chart.notifyDataSetChanged();

        chart.highlightValue(endEpoch, 0,false);
        if(endEpoch - startEpoch > 180 && firstTime) {
            chart.setVisibleXRangeMaximum(180);
        }

        chart.moveViewToX(endEpoch);
    }

    private LineDataSet createSet() {
        LineDataSet set = new LineDataSet(null, null);
//        int blue = Color.rgb(124,181,236);
        int blue = Color.rgb(75,75,75);
        int red = Color.rgb(255,127,127);

        set.setCubicIntensity(0.8f);

        set.setAxisDependency(YAxis.AxisDependency.LEFT);
        set.setColor(blue);
        set.setCircleColor(blue);
        set.setLineWidth(2f);
        set.setDrawCircles(false);
//        set.setCircleRadius(2f);
//        set.setDrawCircleHole(false);
        set.setFillAlpha(65);
        set.setFillColor(blue);

        set.setHighLightColor(red);
        set.enableDashedHighlightLine(10f, 10f, 0f);
        set.setDrawVerticalHighlightIndicator(false);
        set.setDrawIcons(false);

        set.setValueTextColor(Color.GRAY);
        set.setValueTextSize(8f);
        set.setDrawValues(false);
        return set;
    }
}
