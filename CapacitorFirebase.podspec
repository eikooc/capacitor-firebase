
  Pod::Spec.new do |s|
    s.name = 'CapacitorFirebase'
    s.version = '0.0.1'
    s.summary = 'Integrating the offerings of Firebase in a Capacitor plugin'
    s.license = 'MIT'
    s.homepage = 'https://github.com/eikooc/capacitor-firebase'
    s.author = 'Jamie Neubert Pedersen'
    s.source = { :git => 'https://github.com/eikooc/capacitor-firebase', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '10.0'
    s.dependency 'Capacitor'
  end