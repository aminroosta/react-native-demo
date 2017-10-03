package com.github.wuxudong.rncharts.charts;


import android.view.MotionEvent;

import com.facebook.react.uimanager.ThemedReactContext;
import com.github.mikephil.charting.charts.LineChart;
import com.github.mikephil.charting.data.Entry;
import com.github.wuxudong.rncharts.data.DataExtract;
import com.github.wuxudong.rncharts.data.LineDataExtract;
import com.github.wuxudong.rncharts.listener.RNOnChartValueSelectedListener;

public class LineChartManager extends BarLineChartBaseManager<LineChart, Entry> {

    @Override
    public String getName() {
        return "RNLineChart";
    }

    @Override
    protected LineChart createViewInstance(ThemedReactContext reactContext) {
        LineChart lineChart =  new LineChart(reactContext) {
            @Override
            public boolean onInterceptTouchEvent(MotionEvent p_event) { return true; }

            @Override
            public boolean onTouchEvent(MotionEvent p_event)
            {
                if (p_event.getAction() == MotionEvent.ACTION_MOVE && getParent() != null)
                {
                    getParent().requestDisallowInterceptTouchEvent(true);
                }

                return super.onTouchEvent(p_event);
            }
        };
        lineChart.setOnChartValueSelectedListener(new RNOnChartValueSelectedListener(lineChart));
        return lineChart;
    }

    @Override
    DataExtract getDataExtract() {
        return new LineDataExtract();
    }
}
