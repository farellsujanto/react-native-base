package com.reavernrn;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import java.util.Arrays;

import com.imagepicker.ImagePickerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;

public class MainApplication extends NavigationApplication {

  @Override
  protected ReactGateway createReactGateway() {
      ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
          @Override
          protected String getJSMainModuleName() {
              return "index";
          }
      };
      return new ReactGateway(this, isDebug(), host);
  }

  @Override
  public boolean isDebug() {
      return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
      // Add additional packages you require here
      // No need to add RnnPackage and MainReactPackage
        // List<ReactPackage> packages = new PackageList(this).getPackages();
        // packages.add(new RNGestureHandlerPackage());
        // packages.add(new VectorIconsPackage());
        // return packages;
      return Arrays.<ReactPackage>asList(
          // eg. new VectorIconsPackage()
              new RNGestureHandlerPackage(),
              new VectorIconsPackage(),
              new ImagePickerPackage()
      );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
      return getPackages();
  }
}