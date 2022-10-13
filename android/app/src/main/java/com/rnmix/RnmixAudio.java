// package com.coverage.RNVoiceFilter;
package com.rnmix;

import android.content.Context;
import android.media.AudioFormat;
import android.media.AudioManager;
import android.media.AudioRecord;
import android.media.AudioTrack;
import android.media.MediaPlayer;
import android.media.MediaPlayer.OnCompletionListener;
import android.media.MediaPlayer.OnErrorListener;
import android.media.MediaRecorder;
import android.media.audiofx.EnvironmentalReverb;
import android.media.audiofx.Equalizer;
import android.media.audiofx.PresetReverb;
import android.net.Uri;
import android.os.*;
import android.os.Process;
import android.util.Log;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class RnmixAudio extends ReactContextBaseJavaModule {

  RnmixAudio(ReactApplicationContext context) {
    super(context);
  }

  @Override
  public String getName() {
    return "RnmixAudio";
  }

  @ReactMethod
  public void testMethod(Callback callBack) {
    Log.d(
      "RnmixAudio",
      "Hello Log"
    );
    callBack.invoke("help");
  }
}
// public class RNVoiceFilterModule extends ReactContextBaseJavaModule {
//   Map<Integer, MediaPlayer> playerPool = new HashMap<>();
//   ReactApplicationContext context;
//   final static Object NULL = null;
//   public RNVoiceFilterModule(ReactApplicationContext context) {
//     super(context);
//     this.context = context;
//   }
//   @Override
//   public String getName() {
//     return "RNVoiceFilter";
//   }
//     private String TAG = "RNVoiceFilter";
//     private AudioRecord recorder = null;
//     private boolean mIsRecording;
//     private byte[] buffer;
//     private AudioTrack audioTrack;
//     static final int SAMPLE_RATE = 16000;
//     private AudioManager manager;
//     @ReactMethod
//     public void init() {
//         mIsRecording = false;
//         int minBufferSize = AudioRecord.getMinBufferSize(
//                 SAMPLE_RATE,
//                 AudioFormat.CHANNEL_IN_MONO,
//                 AudioFormat.ENCODING_PCM_16BIT);
//         buffer = new byte[minBufferSize];
//         recorder = new AudioRecord(
//                 MediaRecorder.AudioSource.MIC,
//                 SAMPLE_RATE,
//                 AudioFormat.CHANNEL_IN_MONO,
//                 AudioFormat.ENCODING_PCM_16BIT,
//                 minBufferSize);
//         audioTrack = new AudioTrack(
//                 AudioManager.STREAM_MUSIC,
//                 SAMPLE_RATE,
//                 AudioFormat.CHANNEL_OUT_MONO,
//                 AudioFormat.ENCODING_PCM_16BIT,
//                 minBufferSize,
//                 AudioTrack.MODE_STREAM);
//         PresetReverb pReverb = new PresetReverb(0,audioTrack.getAudioSessionId());
//         pReverb.setPreset(PresetReverb.PRESET_LARGEROOM);
//         pReverb.setEnabled(true);
//         EnvironmentalReverb eReverb = new EnvironmentalReverb(1,audioTrack.getAudioSessionId());
//         eReverb.setDecayHFRatio((short) 300);
//         eReverb.setDecayTime(10000);
//         eReverb.setDensity((short) 10000);
//         eReverb.setDiffusion((short) 10000);
//         eReverb.setReverbLevel((short) 10000);
//         eReverb.setRoomLevel((short) 1000);
//         eReverb.setEnabled(true);
//         audioTrack.attachAuxEffect(eReverb.getId());
//     }
//     @ReactMethod
//     public void listen() {
//         mIsRecording = true;
//         loopbackAudio();
//     }
//     @ReactMethod
//     public void setVolume(float volume) {
//         audioTrack.setVolume(volume);
//     }
//     @ReactMethod
//     public void stop() {
//         mIsRecording = false;
//     }
//     public void loopbackAudio() {
//         recorder.startRecording();
//         audioTrack.play();
//         Thread loopbackThread = new Thread(new Runnable() {
//             @Override
//             public void run() {
//                 while (mIsRecording) {
//                     int bufferReadResult = recorder.read(buffer, 0, buffer.length);
//                     audioTrack.write(buffer, 0, bufferReadResult);
//                 }
//                 recorder.stop();
//                 audioTrack.stop();
//                 audioTrack.flush();
//             }
//         });
//         loopbackThread.start();
//     }
// }
