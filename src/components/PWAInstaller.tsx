"use client";

import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import '@khmyznikov/pwa-install';

export interface PWAInstallerRef {
  show: () => void;
}

const PWAInstaller = forwardRef<PWAInstallerRef>((props, ref) => {
  const pwaRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    show: () => {
      if (pwaRef.current) {
        pwaRef.current.showDialog();
      }
    }
  }));

  return (
    <pwa-install
      ref={pwaRef}
      name="DR SPEED NORD"
      icon="/logo.jpg"
      description="Accédez instantanément à nos services depuis votre écran d'accueil."
      install-description="L'installation permet une navigation plus rapide et sécurisée."
      cancel-button-text="Plus tard"
      install-button-text="Installer"
      manual-apple="true"
      manual-chrome="true"
    ></pwa-install>
  );
});

PWAInstaller.displayName = "PWAInstaller";

export default PWAInstaller;