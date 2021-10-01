package com.travelonboardingui;

import android.os.Bundle;//react navigation

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule rendering of the component.
   */
  // react navigation
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

  //
  @Override
  protected String getMainComponentName() {
    return "TravelOnboardingUI";
  }
}
