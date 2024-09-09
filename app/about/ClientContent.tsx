'use client'

import { useEffect } from 'react'

export default function ClientContent() {
  useEffect(() => {
    if (navigator.userAgent.match(/MSIE|Internet Explorer/i) || navigator.userAgent.match(/Trident\/7\..*?rv:11/i)) {
      const e = document.location.href;
      if (!e.match(/[?&]nonitro/)) {
        if (e.indexOf("?") == -1) {
          if (e.indexOf("#") == -1) {
            document.location.href = e + "?nonitro=1"
          } else {
            document.location.href = e.replace("#", "?nonitro=1#")
          }
        } else {
          if (e.indexOf("#") == -1) {
            document.location.href = e + "&nonitro=1"
          } else {
            document.location.href = e.replace("#", "&nonitro=1#")
          }
        }
      }
    }
  }, [])

  return (
    <div>
      <p>0:00 [Music]</p>
      <p>0:05 okay so hey everyone my name is chris go true i'm a physicist at atom computing i'm also an engineering manager...</p>
      <p>1:45 reason number four is that we have strong interactions that are disposable for fast two qubit gates...</p>
      {/* Ajoutez ici le reste du texte en utilisant des balises <p> pour chaque paragraphe */}
    </div>
  )
}