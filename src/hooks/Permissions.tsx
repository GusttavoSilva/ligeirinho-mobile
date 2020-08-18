import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

interface PermissionState {
  LocationPermission: boolean;
}

interface PermissionContextData {
  latitude: number;
  longitude: number;
}

const PermissionContext = createContext<PermissionContextData>(
  {} as PermissionContextData,
);

const PermissionProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<PermissionState>({} as PermissionState);

  const [longitude, setLongitude] = useState<number>(null);
  const [latitude, setLatitude] = useState<number>(null);

  const geolocationPermission = useCallback(async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('permissão concedida');
        setData({ LocationPermission: true });
      } else {
        console.error('permissão negada');
        setData({ LocationPermission: false });
      }
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const coordinatesUser = useCallback(async () => {
    if (data.LocationPermission) {
      const cordenada = await Geolocation.getCurrentPosition((position) => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      });
    }
  }, [Geolocation, data.LocationPermission]);

  useEffect(() => {
    geolocationPermission();
  }, []);

  useEffect(() => {
    coordinatesUser();
  }, [data.LocationPermission]);

  return (
    <PermissionContext.Provider value={{ longitude, latitude }}>
      {children}
    </PermissionContext.Provider>
  );
};

function usePermission(): PermissionContextData {
  const context = useContext(PermissionContext);

  if (!context) {
    throw new Error('usePermission must be used within a PermissionProvider');
  }
  return context;
}

export { PermissionProvider, usePermission };
